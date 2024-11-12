const API_URL = 'http://YOUR_SERVER_IP:3000';

async function loadSavedTables() {
    const tableBody = document.getElementById('saved-tables-body');
    try {
        const response = await fetch(`${API_URL}/api/tables`);
        const tables = await response.json();
        
        tableBody.innerHTML = '';
        tables.forEach((table, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${table.date}</td>
                <td>${table.from_name}</td>
                <td>${table.to_name}</td>
                <td>$ ${table.usd_cash}</td>
                <td>L£ ${table.lbp_cash}</td>
                <td>$ ${table.evening_total_usd}</td>
                <td>L£ ${table.evening_total_lbp}</td>
                <td>$ ${table.settlement_usd}</td>
                <td>L£ ${table.settlement_lbp}</td>
                <td>$ ${table.settlements_difference}</td>
                <td>
                    <div class="action-buttons">
                        <button class="view-btn" onclick="viewFullTable(${table.id})">View</button>
                        <input type="file" id="pdf-upload-${table.id}" accept="application/pdf" style="display: none;" onchange="handleFileUpload(event, ${table.id})">
                        <button class="upload-btn" id="upload-btn-${table.id}">${table.pdf_name || 'Upload PDF'}</button>
                        <button class="delete-btn" onclick="deleteTable(${table.id})">Delete</button>
                    </div>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading tables:', error);
    }
}

async function deleteTable(id) {
    try {
        await fetch(`${API_URL}/api/tables/${id}`, {
            method: 'DELETE'
        });
        loadSavedTables();
    } catch (error) {
        console.error('Error deleting table:', error);
    }
}
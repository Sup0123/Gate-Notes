// Notes data structure
const notes = [
    // GO Classes
    {
        title: "Calculus",
        path: "GO classes/calculas.pdf",
        category: "go-classes",
        folder: "GO Classes",
        tags: ["math", "calculus"]
    },
    {
        title: "Engineering Mathematics",
        path: "GO classes/Eng math.pdf",
        category: "go-classes",
        folder: "GO Classes",
        tags: ["math"]
    },
    {
        title: "Linear Algebra",
        path: "GO classes/Linear algebra.pdf",
        category: "go-classes",
        folder: "GO Classes",
        tags: ["math"]
    },
    {
        title: "Probability",
        path: "GO classes/Probability.pdf",
        category: "go-classes",
        folder: "GO Classes",
        tags: ["math"]
    },
    {
        title: "Short Note on Linear Algebra",
        path: "GO classes/Short note on Linear algebra.pdf",
        category: "go-classes",
        folder: "GO Classes",
        tags: ["math"]
    },
    {
        title: "Short Note on Probability",
        path: "GO classes/Short note on probability.pdf",
        category: "go-classes",
        folder: "GO Classes",
        tags: ["math"]
    },
    
    // KG Classes - Main folder
    {
        title: "AI Notes",
        path: "KG Classes/AI_NOTES_lyst7000.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs", "ai"]
    },
    {
        title: "Algorithm Notes",
        path: "KG Classes/Algo_lyst1729856407228.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs", "algorithms"]
    },
    {
        title: "Computer Organization & Architecture",
        path: "KG Classes/COA_Notes_lyst1724386424149.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs"]
    },
    {
        title: "Compiler Design",
        path: "KG Classes/Compiler_lyst1734068176863.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs"]
    },
    {
        title: "Computer Networks",
        path: "KG Classes/Computer_Networks_Notes_1_lyst1730104743002.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs"]
    },
    {
        title: "Data Structures",
        path: "KG Classes/Data_Structure_lyst1728285292789.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs", "programming"]
    },
    {
        title: "Database Management System",
        path: "KG Classes/DBMS_Notes_lyst1720686867993.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs"]
    },
    {
        title: "Discrete Mathematics",
        path: "KG Classes/DM_Notes_lyst1720677128318.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["math"]
    },
    {
        title: "Digital Electronics",
        path: "KG Classes/Digital_lyst1721377912990.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs"]
    },
    {
        title: "Theory of Computation",
        path: "KG Classes/Toc_Notes_lyst1726729956466.pdf",
        category: "kg-classes",
        folder: "KG Classes - Main",
        tags: ["cs"]
    },
    
    // KG Classes - Graphics
    {
        title: "Computer Graphics - Part 1",
        path: "KG Classes/graphics/CG-1_lyst2763.pdf",
        category: "kg-classes",
        folder: "KG Classes - Graphics",
        tags: ["cs", "graphics"]
    },
    {
        title: "Computer Graphics - Part 2",
        path: "KG Classes/graphics/CG-2_lyst9371.pdf",
        category: "kg-classes",
        folder: "KG Classes - Graphics",
        tags: ["cs", "graphics"]
    },
    {
        title: "Computer Graphics - Unit 3",
        path: "KG Classes/graphics/Unit-3_Computer_Graphics-rotated_lyst6811.pdf",
        category: "kg-classes",
        folder: "KG Classes - Graphics",
        tags: ["cs", "graphics"]
    },
    {
        title: "Computer Graphics - Unit 4",
        path: "KG Classes/graphics/Unit-4_Computer_Graphics-rotated_lyst3247.pdf",
        category: "kg-classes",
        folder: "KG Classes - Graphics",
        tags: ["cs", "graphics"]
    },
    
    // KG Classes - Engineering Math
    {
        title: "Linear Algebra Notes",
        path: "KG Classes/Eng math/_Notes__Linear_Algebra_watermark_lyst1722588649514.pdf",
        category: "kg-classes",
        folder: "KG Classes - Eng math",
        tags: ["math"]
    },
    {
        title: "Calculus Notes - Yash Jain Sir",
        path: "KG Classes/Eng math/Calculus_Notes_Yash_Jain_Sir_watermark_lyst1722587448084.pdf",
        category: "kg-classes",
        folder: "KG Classes - Eng math",
        tags: ["math"]
    },
    {
        title: "Permutation & Combination",
        path: "KG Classes/Eng math/Permutation___Combination_Notes_lyst1729487334950.pdf",
        category: "kg-classes",
        folder: "KG Classes - Eng math",
        tags: ["math"]
    },
    {
        title: "Probability Notes",
        path: "KG Classes/Eng math/Probability_Notes_lyst1729493528518.pdf",
        category: "kg-classes",
        folder: "KG Classes - Eng math",
        tags: ["math"]
    },
    
    // KG Classes - C Programming
    {
        title: "C Programming - Getting Started",
        path: "KG Classes/c prog/ch-1_Getting_Started_lyst4792.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    },
    {
        title: "C Programming - Decision Control Structure",
        path: "KG Classes/c prog/ch-2_The_Decision_Control_Structure_lyst4182.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    },
    {
        title: "C Programming - Loop Control Structure",
        path: "KG Classes/c prog/ch-3_The_Loop_Control_Structure_lyst9359.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    },
    {
        title: "C Programming - Case Control Structure",
        path: "KG Classes/c prog/ch-4_The_Case_Control_Structure_lyst1208.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    },
    {
        title: "C Programming - Functions",
        path: "KG Classes/c prog/ch-5_Functions_lyst1192.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    },
    {
        title: "C Programming - Pointers",
        path: "KG Classes/c prog/ch-5_Pointers_lyst4670.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    },
    {
        title: "C Programming - Data Types Revisited",
        path: "KG Classes/c prog/ch-6_Data_Types_Revisited_lyst5853.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    },
    {
        title: "C Programming - Structures",
        path: "KG Classes/c prog/ch-7_Structures_lyst9386.pdf",
        category: "kg-classes",
        folder: "KG Classes - c prog",
        tags: ["programming", "c"]
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const notesContainer = document.getElementById('notesContainer');
const totalNotes = document.getElementById('totalNotes');

// Filter and search functionality
let filteredNotes = [...notes];

function getCategoryLabel(category) {
    const labels = {
        'go-classes': 'GO Classes',
        'kg-classes': 'KG Classes'
    };
    return labels[category] || category;
}

function getCategoryFromTags(tags) {
    if (tags.includes('math')) return 'math';
    if (tags.includes('cs')) return 'cs';
    if (tags.includes('programming')) return 'programming';
    return null;
}

function renderNotes() {
    notesContainer.innerHTML = '';
    
    if (filteredNotes.length === 0) {
        notesContainer.innerHTML = `
            <div class="empty-state">
                <h2>No notes found</h2>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    // Group notes by folder
    const notesByFolder = {};
    filteredNotes.forEach(note => {
        const folder = note.folder || 'Other';
        if (!notesByFolder[folder]) {
            notesByFolder[folder] = [];
        }
        notesByFolder[folder].push(note);
    });
    
    // Define folder order
    const folderOrder = [
        'GO Classes',
        'KG Classes - Main',
        'KG Classes - Graphics',
        'KG Classes - Eng math',
        'KG Classes - c prog'
    ];
    
    // Render notes grouped by folder
    folderOrder.forEach(folderName => {
        if (notesByFolder[folderName] && notesByFolder[folderName].length > 0) {
            // Create folder section
            const folderSection = document.createElement('div');
            folderSection.className = 'folder-section';
            
            const folderHeader = document.createElement('div');
            folderHeader.className = 'folder-header';
            folderHeader.innerHTML = `
                <span class="folder-icon">📁</span>
                <h2 class="folder-title">${folderName}</h2>
                <span class="folder-count">${notesByFolder[folderName].length} notes</span>
            `;
            
            const folderGrid = document.createElement('div');
            folderGrid.className = 'folder-grid';
            
            notesByFolder[folderName].forEach(note => {
                const card = document.createElement('div');
                card.className = 'note-card';
                
                const categoryLabel = getCategoryLabel(note.category);
                
                card.innerHTML = `
                    <div class="category-badge">${categoryLabel}</div>
                    <h3 class="note-title">${note.title}</h3>
                    <div class="note-path">${note.path}</div>
                    <a href="${encodeURI(note.path)}" class="note-link" target="_blank">
                        Open PDF
                    </a>
                `;
                
                folderGrid.appendChild(card);
            });
            
            folderSection.appendChild(folderHeader);
            folderSection.appendChild(folderGrid);
            notesContainer.appendChild(folderSection);
        }
    });
    
    // Render any remaining notes in other folders
    Object.keys(notesByFolder).forEach(folderName => {
        if (!folderOrder.includes(folderName) && notesByFolder[folderName].length > 0) {
            const folderSection = document.createElement('div');
            folderSection.className = 'folder-section';
            
            const folderHeader = document.createElement('div');
            folderHeader.className = 'folder-header';
            folderHeader.innerHTML = `
                <span class="folder-icon">📁</span>
                <h2 class="folder-title">${folderName}</h2>
                <span class="folder-count">${notesByFolder[folderName].length} notes</span>
            `;
            
            const folderGrid = document.createElement('div');
            folderGrid.className = 'folder-grid';
            
            notesByFolder[folderName].forEach(note => {
                const card = document.createElement('div');
                card.className = 'note-card';
                
                const categoryLabel = getCategoryLabel(note.category);
                
                card.innerHTML = `
                    <div class="category-badge">${categoryLabel}</div>
                    <h3 class="note-title">${note.title}</h3>
                    <div class="note-path">${note.path}</div>
                    <a href="${encodeURI(note.path)}" class="note-link" target="_blank">
                        Open PDF
                    </a>
                `;
                
                folderGrid.appendChild(card);
            });
            
            folderSection.appendChild(folderHeader);
            folderSection.appendChild(folderGrid);
            notesContainer.appendChild(folderSection);
        }
    });
    
    totalNotes.textContent = filteredNotes.length;
}

function filterNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    
    filteredNotes = notes.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(searchTerm) ||
                            note.path.toLowerCase().includes(searchTerm) ||
                            note.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        let matchesCategory = false;
        
        if (categoryValue === 'all') {
            matchesCategory = true;
        } else if (categoryValue === 'go-classes') {
            matchesCategory = note.category === 'go-classes';
        } else if (categoryValue === 'kg-main') {
            matchesCategory = note.folder === 'KG Classes - Main';
        } else if (categoryValue === 'kg-graphics') {
            matchesCategory = note.folder === 'KG Classes - Graphics';
        } else if (categoryValue === 'kg-engmath') {
            matchesCategory = note.folder === 'KG Classes - Eng math';
        } else if (categoryValue === 'kg-cprog') {
            matchesCategory = note.folder === 'KG Classes - c prog';
        } else if (categoryValue === 'math') {
            matchesCategory = note.tags.includes('math');
        } else if (categoryValue === 'cs') {
            matchesCategory = note.tags.includes('cs');
        } else if (categoryValue === 'programming') {
            matchesCategory = note.tags.includes('programming');
        }
        
        return matchesSearch && matchesCategory;
    });
    
    renderNotes();
}

// Event listeners
searchInput.addEventListener('input', filterNotes);
categoryFilter.addEventListener('change', filterNotes);

// Initial render
renderNotes();


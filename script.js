// Initialize GrapesJS for the no-code builder
const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    width: '100%',
    height: '600px',
    storageManager: false, // No saving for simplicity
    panels: { defaults: [] },
    blockManager: {
        appendTo: '#gjs',
        blocks: [
            { id: 'text', label: 'Text', content: '<p>Enter your text here</p>' },
            { id: 'image', label: 'Image', content: '<img src="https://via.placeholder.com/150">' },
            { id: 'button', label: 'Button', content: '<button class="btn btn-primary">Click Me</button>' }
        ]
    }
});

// Optional: Add more interactivity if needed
console.log('Website Builder Initialized');

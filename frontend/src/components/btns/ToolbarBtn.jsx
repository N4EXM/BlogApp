// Reusable Toolbar Button Component
const ToolbarButton = ({ active, onClick, disabled, children, title }) => {
    return (
        <div
            className="p-1"
        >
            <button
                onClick={onClick}
                disabled={disabled}
                title={title}
                className={`
                    p-2 px- rounded transition-all  duration-200 font-medium
                    ${
                        active 
                        ? 'bg-blue-100 text-blue-700 ring-1 ring-blue-300' 
                        : 'text-gray-700 hover:bg-gray-200'
                    }
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                `}
            >
                {children}
            </button>
        </div>
    );
}

export default ToolbarButton
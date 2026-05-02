const Toast = ({ message, type }) => {

    const icon = type === 'success' ? (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 stroke-current text-amber-500"
            fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 stroke-current text-red-500"
            fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const styles = type === 'success'
        ? 'border-amber-200 bg-amber-50 text-amber-700'
        : 'border-red-200 bg-red-50 text-red-600';

    return (
        <div
            role="alert"
            className={`
                fixed top-5 right-5 z-50
                w-80 flex items-center gap-3
                px-4 py-3 rounded-xl
                border ${styles}
                shadow-md
                animate-slide-in
            `}
        >
            {icon}
            <span className="text-sm font-medium">
                {message}
            </span>
        </div>
    );
};

export default Toast;
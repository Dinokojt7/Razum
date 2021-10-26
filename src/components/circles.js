
export default function Circles() {
    let circleCommonClasses = 'bg-transparent flex justify-center rounded-full animate-spin h-4 w-4 border-t-2 border-b-2 border-indigo-200';

     return (
    <div className='flex justify-center'>
        <div 
            className={`${circleCommonClasses}`}>
        </div>

    </div>
     );
};

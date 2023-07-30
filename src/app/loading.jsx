import './spinner.css'
export default function Loading () {
    return (
        <div className="bg-dark w-full h-screen flex justify-center items-center">
            <div className="lds-spinner scale-75">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>);
}


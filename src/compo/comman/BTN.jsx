
const BTN = ({text , type}) =>{
    return (
        <button className="px-6 py-2 rounded-md bg-blue-700" type={type}>
            {text}
        </button>
    )
}
export default BTN;
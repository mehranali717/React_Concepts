const Custombtn =(props)=> {
    return <button {...props} className={`text-[13px] text-[#fff] font-[600] rounded-full py-[3px] px-[12px] capitalize ${props.className}`} >{props.label}</button>
}
export default Custombtn;
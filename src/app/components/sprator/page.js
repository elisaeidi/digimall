
"use client";
export default function Sprator({ ...props }) {
    const sprateNumber = props.num
    const commafy = (sprateNumber) => {
        var str = sprateNumber.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    return (
        <div className="flex text-base">
            <label>
                <i>{props.name} : </i>
                <span className={`${props?.color}:text-gray-400`}>
                    {(commafy(sprateNumber))}
                </span>
                {
                    props.currencyUnit ? 
                    <span className={`${props?.color}:text-gray-400`}> تومان</span>
                    :""
                }
            </label>
        </div>
    )
}
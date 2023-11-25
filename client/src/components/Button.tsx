
export const Button = ({text, Onclick}:any) =>
{
    return (<div>
        <button onClick={Onclick}>
            {text}
        </button>
    </div>)
}
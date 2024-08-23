export default function Comments() {

    const commentList = [
        {
            name: 'Elahe',
            comment: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',

        },
    {
            name: 'Alex',
            comment: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',

        },
    {
            name: 'Mia',
            comment: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',

        },
    {
            name: 'Ben',
            comment: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',

        }
    ]

    return (
        <div className="flex flex-row justify-between mobile:flex-col">
            {
                commentList.map(item => {
                    return <div className="border border-violet-500 rounded-lg m-2 p-2">
                        <label>{item.name}</label>
                        <br />
                        <label className="overflow-hidden w-20">{item.comment}</label>
                    </div>
                })
            }
        </div>
    )
}
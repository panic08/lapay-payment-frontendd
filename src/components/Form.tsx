import React from 'react';
import style from "./styles/style.module.css";
import axios from "axios";
type Props = {
    id: number,
    text: string,

}
const Form: React.FC<Props> = ({id, text}) => {
    function handleDelete(e: any) {
        e.preventDefault();
        axios.post('http://localhost:8080/api/deleteMessage', {
            id: id,
            text: text,
        })
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.coontainer}>
                    <div className={style.form}>
                        <p>{text}</p>
                        <a onClick={handleDelete} style={{display: "inline", margin: "0 20px", color: "white", cursor: "pointer"}}>Удалить</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
import React, {FC, useState} from 'react';
import './Form.scss';
import {Checkbox} from "../elements/Checkbox/Checkbox";
import axiosInstance from "../../api/axiosInstance";
import {MAIL_TO} from "../../config/constants";

interface Props {
}

export const Form: FC<Props> = () => {

    const [mailResponse, setMailResponse] = useState({message: "", error: ""})

    const handleCheckboxChange = (event: any) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        namePractice: '',
        linkPortfolio: '',
        about: '',
        checkbox: false,
    });

    const [errors, setErrors] = useState({
        tel: '',
    });

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };


    const validateTel = () => {
        const {tel} = formData;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?[1-9]\d{1,14}$/; // Simple international phone number pattern
        let errMsg = ""

        if (!emailPattern.test(tel) && !phonePattern.test(tel)) {
            errMsg = 'Введите номер, в формате +7... /или проверьте email'

        }

        setErrors({...errors, tel: errMsg});
        return errMsg
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let res = validateTel();
        if (!res) {
            // Creating a form data object to handle file upload
            const data = new FormData();
            data.append('name', formData.name);
            data.append('tel', formData.tel);
            data.append('namePractice', formData.namePractice);
            data.append('linkPortfolio', formData.linkPortfolio);
            data.append('about', formData.about);
            // data.append('subject', "Стажировка");
            data.append('to', MAIL_TO);

            // Add file if selected
            const fileInput: any = document.getElementById('file-upload');
            if (fileInput?.files && fileInput?.files[0]) {
                data.append('file', fileInput.files[0]);
            }

            axiosInstance.post("wp-json/wp/v2/send-mail", data)
                .then((response) => response)
                .then((result) => {
                    setMailResponse({...mailResponse, message: "Успешно отправлено!"})
                })
                .catch((error) => {
                    setMailResponse({...mailResponse, message: "Ошибка! " + error})
                });
        }else {
            setMailResponse({...mailResponse, error: "Ошибка! Проверьте поля перед отправкой."})
        }
    };

    return (
        <div className={"form-component"}>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <div className="row wrapper1">
                    <div className="col-12">
                        <input
                            className="form-input"
                            name="name"
                            placeholder="Имя: "
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        <input
                            className="form-input"
                            name="tel"
                            placeholder="Телефон/e-mail: "
                            value={formData.tel}
                            onChange={handleInputChange}
                            onBlur={validateTel}
                        />
                        {errors.tel && <small className="error-message">{errors.tel}</small>}
                    </div>
                    <div className="col-12">
                        <input
                            className="form-input"
                            name="namePractice"
                            placeholder="Направление стажировки: "
                            value={formData.namePractice}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        <input
                            className="form-input"
                            name="linkPortfolio"
                            placeholder="Ссылка на портфолио: "
                            value={formData.linkPortfolio}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="p1 text-or">или</div>

                <div className="row wrapper1">
                    <div className="col-12">
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <div className="img-wrapper">
                                <img
                                    style={{width: '16px', height: '16px'}}
                                    src="img/assets/icons/clip.svg"
                                    alt="attach file"
                                />
                            </div>
                            Прикрепить файл портфолио
                        </label>
                        <input id="file-upload" className="form-input" type="file"/>
                    </div>
                    <div className="col-12">
          <textarea
              placeholder="Расскажите о себе: "
              className="notebook-textbox"
              rows={5}
              cols={5}
              name="about"
              value={formData.about}
              onChange={handleInputChange}
          />
                    </div>
                    <div className="col-12">
                        <div className={"col-12"}>

                            <Checkbox onChecked={handleCheckboxChange}
                                      name={"Отправляя заявку, я подтверждаю свое согласие с политикой конфиденциальности. "}/>
                        </div>
                        {/*<div style={{display: 'inline-flex', alignItems: 'center'}}>*/}
                        {/*    <input*/}
                        {/*        type="checkbox"*/}
                        {/*        id="checkbox"*/}
                        {/*        checked={formData.checkbox}*/}
                        {/*        onChange={handleCheckboxChange}*/}
                        {/*    />*/}
                        {/*    <label htmlFor="checkbox" style={{marginLeft: '8px'}}>*/}
                        {/*        Отправляя заявку, я подтверждаю свое согласие с политикой конфиденциальности.*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="btn-wrapper">
                    <button className="btn light" type="submit"> Пройти стажировку
                    </button>
                </div>
                <div className={"d-flex justify-content-center"}>{mailResponse.error || mailResponse.message}</div>
            </form>
        </div>
    )

};


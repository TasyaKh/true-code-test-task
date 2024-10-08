import React, {FC} from 'react';
import './RulesPage.scss';
import {Footer} from "../../components/Footer/Footer";
import {Navbar} from "../../components/Navbar/Navbar";

interface Props {
}

export const RulesPage: FC<Props> = () => {

    return (
        <div className="rules-page">
            <Navbar/>
            <div className={"container"}>
                <h3 style={{textAlign: "center"}}>
                    Наши правила
                </h3>
                <p className={"p1"}>
                    true.code — это люди. Наш основной капитал и основная ценность — это не компьютеры, не мебель и не
                    офис, а люди. Какие люди, такая и компания и наоборот. Поэтому мы написали простые правила, которые
                    разделяют все, кто работает или готов работать с нами.
                </p>
                <p className={"p1"}>
                    Задачи этого свода правил — отражение миссии, стандартов общения и поведения, нравственных
                    принципов.
                </p>
                <p className={"p1"}>
                    Каждый человек — личность, и привносит в коллектив своё мировоззрение, привычки и принципы. Это
                    хорошо, если личные убеждения человека не противоречат сложившейся в компании культуре, а дополняют,
                    усиливают её.
                </p>

                <p className={"p1"}>
                    Наши правила публичны и распространяются на клиентов, партнёров и будущих сотрудников. Из нашей
                    декларации ясно, подойдём ли мы друг другу, сработаемся ли в долгой перспективе.
                </p>
                <p className={"p1"}>
                    Приводим наши принципы по состоянию на январь 2018 года.
                </p>

                <h4>ЦЕЛЬ</h4>
                <p className={"p1"}>Стать компанией, меняющей мир с помощью новых технологий.</p>

                <h4>ЗАДАЧИ</h4>
                <p className={"p1"}>
                    <ul>
                        <li>
                            Эффектно и эффективно решать задачи клиентов с помощью дизайна, технологий, аналитики и
                            маркетинга.
                        </li>
                        <li>
                            Создавать проекты, меняющие экономику региона, страны и мира.
                        </li>
                        <li>
                            Выстраивать долгосрочные отношения с клиентами, партнёрами, сотрудниками.
                        </li>
                        <li>
                            Привлекать, обучать и воспитывать кадры.
                        </li>
                        <li>
                            Любить природу и Байкал.
                        </li>
                    </ul>
                </p>

                <h4>ЦЕННОСТИ</h4>
                <p className={"p1"}>
                    <ul>
                        <li>
                            Честность и открытость.
                        </li>
                        <li>
                            Профессионализм, любовь к своему делу.
                        </li>
                        <li>
                            Амбициозность.
                        </li>
                        <li>
                            Работоспособность и самоотдача.
                        </li>
                        <li>
                            Готовность принять вызов, воля к победе.
                        </li>
                        <li>
                            Умение ценить своё время и труд.
                        </li>
                        <li>
                            Стремление учиться всегда.
                        </li>
                    </ul>
                </p>

                <h4>СОЦИАЛЬНАЯ ОТВЕТСВЕННОСТЬ</h4>
                <p className={"p1"}>
                    Байкал — место, где мы стали теми, кто есть. Мы чувствуем связь с ним и личную ответственность за
                    его судьбу. Поэтому всегда готовы помогать ему тем, что мы хорошо умеем, а именно: создавать и
                    реализовывать эффективные дизайн- и digital-стратегии; делиться своим опытом с теми, кто разделяет с
                    нами любовь к Байкалу и так же стремится помочь ему. Наконец, просто ездить на Байкал и убирать там
                    мусор или сажать деревья.
                </p>

                <h4>ГЛАВНОЕ</h4>
                <p className={"p1"}>
                    Мы больше чем компания, создающая или продвигающая сайты, — мы стремимся изменить мир с помощью
                    новых технологий.
                    Мы не превращаем компанию в семью. Мы скорее спортивная команда, игроки которой помогают друг другу
                    в достижении общей цели.
                    Команда должна быть эффективной. Если сотрудник работает плохо, то нам не по пути.
                    Фокус должен быть на результате, а не на процессе. Но процесс не должен быть мучительным, мы
                    стремимся улучшать свою работу и получать от неё удовольствие.
                    Желание преуспеть заражает аналогичным желанием окружающих.
                    Целеустремлённость, настойчивость и достижение успеха поощряется.
                    Мы активно и полно делимся информацией.
                    У нас нет дресс-кода, но никто не ходит на работу голым. Вывод: не всё требует специальных правил.
                    (Спасибо, Netflix).
                </p>

                <h4>ПОВЕДЕНИЕ В СОЦСЕТЯХ И НА УЛИЦЕ</h4>
                <p className={"p1"}>
                    Помните правило о том, что за глаза можно говорить только то, что готовы сказать в глаза.
                </p>
                <p className={"p1"}>
                    Перед тем, как опубликовать что-то в социальных сетях, дважды подумайте, не навредит ли компании то,
                    о чём вы пишете. Если не уверены, то лучше ничего не писать.
                </p>


                <h4>КОНФИДЕНЦИАЛЬНОСТЬ И КОНКУРЕНЦИЯ</h4>
                <p className={"p1"}>
                    <ul>
                        <li>
                            Конкурент — компания, чьи профессиональные интересы (услуги, клиенты, кадры) лежат в той же
                            плоскости, что и наши.
                        </li>
                        <li>
                            Мы равняемся на лучших.
                        </li>
                        <li>
                            Мы за честную конкуренцию.
                        </li>
                        <li>
                            Мы не ведём себя нечестно по отношению к конкурентам, не переманиваем их сотрудников и не
                            уводим клиентов целенаправленно. Но если к нам пришёл сотрудник или клиент из конкурирующей
                            компании, мы не будем отказываться от работы с ним.
                        </li>
                        <li>
                            Мы не распространяем про конкурентов неправду и слухи.
                        </li>
                        <li>
                            Если в конкурирующих компаниях работают ваши друзья или близкие родственники — пожалуйста,
                            думайте, когда разговариваете с ними на профессиональные темы.
                        </li>
                        <li>
                            Сбор, хранение, распространение и использование любой информации о частной жизни сотрудника
                            без его согласия не допускаются.
                        </li>
                        <li>
                            Со своей стороны, компания просит не собирать, не хранить, не использовать и не
                            распространять информацию о частной жизни компании за её пределами.
                        </li>
                    </ul>
                </p>
                <div className={"img-gauss mobile-hide"}>
                    <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
                </div>

                <div className={"img-gauss1 pc-hide"}>
                    <img className={"img-resizable"} src={"/img/gauss.png"} alt={""}/>
                </div>
            </div>

            <Footer/>
        </div>
    )
};


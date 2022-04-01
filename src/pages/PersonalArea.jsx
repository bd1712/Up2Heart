import '../styles/_PersonalArea.scss';

function PersonalArea() {
    return (
        <>
            <section className='PersonalArea-Page'>
                <div className='container'>
                    <div className='White-Block-PersonalArea'></div>

                    <div className='PersonalArea-Page__Inner'>
                        <div className='PersonalArea-Page__Inner__Logo-Information-Text'>
                            <div className='PersonalArea-Page__Inner__Logo-Information-Text__Logo'></div>

                            <div className='PersonalArea-Page__Inner__Logo-Information-Text__Information'>
                                <h5 className='PersonalArea-Page__Inner__Logo-Information-Text__Information__Text'>Имя</h5>
                                <h5 className='PersonalArea-Page__Inner__Logo-Information-Text__Information__Text'>эл. адрес</h5>
                                <h5 className='PersonalArea-Page__Inner__Logo-Information-Text__Information__Text'>Мой рейтинг:</h5>
                            </div>
                        </div>
                    
                        <div className='PersonalArea-Page__Inner__Table-Announcement'>
                            <h1 className='PersonalArea-Page__Inner__Table-Announcement__Title'>Мои объявления</h1>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Дата</th>
                                        <th>Объявления</th>
                                        <th>Отзывы</th>
                                        <th>Категории</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12.09.2021</td>
                                        <td>Заберу посылку в Москву</td>
                                        <td></td>
                                        <td>Ала кел</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h1 className='PersonalArea-Page__Inner__Table-Announcement__Title1'>Мои сообщения</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Дата</th>
                                        <th>Сообщение</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PersonalArea;
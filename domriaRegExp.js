const conf = require('./config');
/**
 * Класс для парсинга URL-ов для сайта dom.ria
 */
class dom_ria_url_parser{   
    /**
     * Инициализирует регулярное выражение для парсера
     */
    constructor(){
        this.reg = new RegExp(
        `^\/(${conf.languages.join("|")})`              //2 Мова 
        +`(?:\/novostroyki)`                            //3
        +`(?:\-(${conf.regions.join("|")})\-oblast)?`   //4.a Область
        +`(?:\-([a-z][a-z\-]*?[a-z]))?`              //4.b місто
        +`(?:`
        +`(?:\-rayon\-([a-z][a-z\-]*?[a-z]))|`      //4.c.1  Район 
        +`(?:\-metro\-([a-z][a-z\-]*?[a-z]))|`      //4.c.2 Метро
        +`(?:\-(levyy\-bereg|pravyy\-bereg))|`      //4.c.3 Берег
        +`(?:\-(vozle\-metro))|`                    //4.c.4 Біля метро
        +`(?:\-ulitsa\-([a-z][a-z\-]*?[a-z]))`      //4.c.5 Вулиця
        +`)?`    
        +`(?:\-(sdannyye))?`                        //5.1 Здані в експлуатацію
        +`(?:\-(stroyashchiyesya))?`                //5.2 В процесі будівництва
        +`(?:\-(${conf.object_types.join("|")}))?`  //5.3 Тип об’єкта
        +`(?:\-(${conf.object_class.join("|")}))?`  //5.4 Клас об’єкта
        +`(?:\-(${conf.room_number.join("|")}))?`   //5.5 Кімнатність
        +`(?:\-(rassrochka))?`                      //5.6 Розтермінування виплат
        +`(?:\-(s-remontom))?`                      //5.7 З ремонтом
        +`$`);
    };
    /**
     * Парсит строку str
     *  @param {String} str
     *  @returns {Array} [0: Результат, 1: Мова, 2: Область, 3: Місто, 4: Район, 5: Метро, 6: Берег, 7: Біля метро, 8: Вулиця, 9: Здані в експлуатацію, 10: В процесі будівництва, 11: Тип об’єкта, 12: Клас об’єкта, 13: Кімнатність, 14: Розтермінування виплат, 15: З ремонтом]
     */
    parse(str){
        return this.reg.exec(""+str);
    };
};
module.exports = dom_ria_url_parser;
import { Locale } from '@/shared/constants/LOCALES'
import { capitalizeFirstLetter } from '@/shared/utils/capitalizeFirstLetter'

export const countryNameBy = (id: string, locale: Locale): string => {
    if (nameById.has(id)) return (nameById.get(id) as LocalizedValue)[locale]

    return capitalizeFirstLetter(id)
}

type LocalizedValue = Record<Locale, string>

const nameById: Map<string, LocalizedValue> = new Map([
    ['afghanistan', {
        en: 'Afghanistan',
        ru: 'Афганистан',
        zh: '阿富汗',
    }],
    ['albania', {
        en: 'Albania',
        ru: 'Албания',
        zh: '阿尔巴尼亚',
    }],
    ['algeria', {
        en: 'Algeria',
        ru: 'Алжир',
        zh: '阿尔及利亚',
    }],
    ['angola', {
        en: 'Angola',
        ru: 'Ангола',
        zh: '安哥拉',
    }],
    ['antiguaandbarbuda', {
        en: 'Antigua and Barbuda',
        ru: 'Антигуа и Барбуда',
        zh: '安提瓜和巴布达',
    }],
    ['argentina', {
        en: 'Argentina',
        ru: 'Аргентина',
        zh: '阿根廷',
    }],
    ['armenia', {
        en: 'Armenia',
        ru: 'Армения',
        zh: '亚美尼亚',
    }],
    ['aruba', {
        en: 'Aruba',
        ru: 'Аруба',
        zh: '阿鲁巴',
    }],
    ['australia', {
        en: 'Australia',
        ru: 'Австралия',
        zh: '澳大利亚',
    }],
    ['austria', {
        en: 'Austria',
        ru: 'Австрия',
        zh: '奥地利',
    }],
    ['azerbaijan', {
        en: 'Azerbaijan',
        ru: 'Азербайджан',
        zh: '阿塞拜疆',
    }],
    ['bahamas', {
        en: 'Bahamas',
        ru: 'Багамы',
        zh: '巴哈马',
    }],
    ['bahrain', {
        en: 'Bahrain',
        ru: 'Бахрейн',
        zh: '巴林',
    }],
    ['bangladesh', {
        en: 'Bangladesh',
        ru: 'Бангладеш',
        zh: '孟加拉国',
    }],
    ['barbados', {
        en: 'Barbados',
        ru: 'Барбадос',
        zh: '巴巴多斯',
    }],
    ['belarus', {
        en: 'Belarus',
        ru: 'Беларусь',
        zh: '白俄罗斯',
    }],
    ['belgium', {
        en: 'Belgium',
        ru: 'Бельгия',
        zh: '比利时',
    }],
    ['belize', {
        en: 'Belize',
        ru: 'Белиз',
        zh: '伯利兹',
    }],
    ['benin', {
        en: 'Benin',
        ru: 'Бенин',
        zh: '贝宁',
    }],
    ['bhutane', {
        en: 'Bhutan',
        ru: 'Бутан',
        zh: '不丹',
    }],
    ['bih', {
        en: 'Bosnia and Herzegovina',
        ru: 'Босния и Герцеговина',
        zh: '波斯尼亚和黑塞哥维那',
    }],
    ['bolivia', {
        en: 'Bolivia',
        ru: 'Боливия',
        zh: '玻利维亚',
    }],
    ['botswana', {
        en: 'Botswana',
        ru: 'Ботсвана',
        zh: '博茨瓦纳',
    }],
    ['brazil', {
        en: 'Brazil',
        ru: 'Бразилия',
        zh: '巴西',
    }],
    ['bulgaria', {
        en: 'Bulgaria',
        ru: 'Болгария',
        zh: '保加利亚',
    }],
    ['burkinafaso', {
        en: 'Burkina Faso',
        ru: 'Буркина-Фасо',
        zh: '布基纳法索',
    }],
    ['burundi', {
        en: 'Burundi',
        ru: 'Бурунди',
        zh: '布隆迪',
    }],
    ['cambodia', {
        en: 'Cambodia',
        ru: 'Камбоджи',
        zh: '柬埔寨',
    }],
    ['cameroon', {
        en: 'Cameroon',
        ru: 'Камерун',
        zh: '喀麦隆',
    }],
    ['canada', {
        en: 'Canada',
        ru: 'Канада',
        zh: '加拿大',
    }],
    ['capeverde', {
        en: 'Cape Verde',
        ru: 'Кабо-Верде',
        zh: '佛得角',
    }],
    ['chad', {
        en: 'Chad',
        ru: 'Чад',
        zh: '乍得',
    }],
    ['chile', {
        en: 'Chile',
        ru: 'Чили',
        zh: '智利',
    }],
    ['colombia', {
        en: 'Colombia',
        ru: 'Колумбия',
        zh: '哥伦比亚',
    }],
    ['comoros', {
        en: 'Comoros',
        ru: 'Коморы',
        zh: '科摩罗',
    }],
    ['congo', {
        en: 'Congo',
        ru: 'Конго',
        zh: '刚果',
    }],
    ['costarica', {
        en: 'Costa Rica',
        ru: 'Коста-Рика',
        zh: '哥斯达黎加',
    }],
    ['croatia', {
        en: 'Croatia',
        ru: 'Хорватия',
        zh: '克罗地亚',
    }],
    ['cyprus', {
        en: 'Cyprus',
        ru: 'Кипр',
        zh: '塞浦路斯',
    }],
    ['czech', {
        en: 'Czechia',
        ru: 'Чехия',
        zh: '捷克',
    }],
    ['denmark', {
        en: 'Denmark',
        ru: 'Дания',
        zh: '丹麦',
    }],
    ['djibouti', {
        en: 'Djibouti',
        ru: 'Джибути',
        zh: '吉布提',
    }],
    ['dominicana', {
        en: 'Dominican Republic',
        ru: 'Доминиканская Республика',
        zh: '多米尼加',
    }],
    ['easttimor', {
        en: 'East Timor',
        ru: 'Восточный Тимор',
        zh: '东帝汶',
    }],
    ['ecuador', {
        en: 'Ecuador',
        ru: 'Эквадор',
        zh: '厄瓜多尔',
    }],
    ['egypt', {
        en: 'Egypt',
        ru: 'Египет',
        zh: '埃及',
    }],
    ['england', {
        en: 'England',
        ru: 'Великобритания',
        zh: '英国',
    }],
    ['equatorialguinea', {
        en: 'Equatorial Guinea',
        ru: 'Экваториальная Гвинея',
        zh: '赤道几内亚',
    }],
    ['estonia', {
        en: 'Estonia',
        ru: 'Эстония',
        zh: '爱沙尼亚',
    }],
    ['ethiopia', {
        en: 'Ethiopia',
        ru: 'Эфиопия',
        zh: '埃塞俄比亚',
    }],
    ['finland', {
        en: 'Finland',
        ru: 'Финляндия',
        zh: '芬兰',
    }],
    ['france', {
        en: 'France',
        ru: 'Франция',
        zh: '法国',
    }],
    ['frenchguiana', {
        en: 'French Guiana',
        ru: 'Французская Гвиана',
        zh: '法属圭亚那',
    }],
    ['gabon', {
        en: 'Gabon',
        ru: 'Габон',
        zh: '加蓬',
    }],
    ['gambia', {
        en: 'Gambia',
        ru: 'Гамбия',
        zh: '冈比亚',
    }],
    ['georgia', {
        en: 'Georgia',
        ru: 'Грузия',
        zh: '格鲁吉亚',
    }],
    ['germany', {
        en: 'Germany',
        ru: 'Германия',
        zh: '德国',
    }],
    ['ghana', {
        en: 'Ghana',
        ru: 'Гана',
        zh: '加纳',
    }],
    ['gibraltar', {
        en: 'Gibraltar',
        ru: 'Гибралтар',
        zh: 'undefined',
    }],
    ['greece', {
        en: 'Greece',
        ru: 'Греция',
        zh: '希腊',
    }],
    ['guadeloupe', {
        en: 'Guadeloupe',
        ru: 'Гваделупа',
        zh: '瓜德罗普',
    }],
    ['guatemala', {
        en: 'Guatemala',
        ru: 'Гватемала',
        zh: '危地马拉',
    }],
    ['guinea', {
        en: 'Guinea',
        ru: 'Гвинея',
        zh: '几内亚',
    }],
    ['guineabissau', {
        en: 'Guinea-Bissau',
        ru: 'Гвинея-Бисау',
        zh: '几内亚比绍',
    }],
    ['guyana', {
        en: 'Guyana',
        ru: 'Гайана',
        zh: '圭亚那',
    }],
    ['haiti', {
        en: 'Haiti',
        ru: 'Гаити',
        zh: '海地',
    }],
    ['honduras', {
        en: 'Honduras',
        ru: 'Гондурас',
        zh: '洪都拉斯',
    }],
    ['hongkong', {
        en: 'Hong Kong',
        ru: 'Гонконг',
        zh: '中国香港',
    }],
    ['hungary', {
        en: 'Hungary',
        ru: 'Венгрия',
        zh: '匈牙利',
    }],
    ['india', {
        en: 'India',
        ru: 'Индия',
        zh: '印度',
    }],
    ['indonesia', {
        en: 'Indonesia',
        ru: 'Индонезия',
        zh: '印度尼西亚',
    }],
    ['ireland', {
        en: 'Ireland',
        ru: 'Ирландия',
        zh: '爱尔兰',
    }],
    ['israel', {
        en: 'Israel',
        ru: 'Израиль',
        zh: '以色列',
    }],
    ['italy', {
        en: 'Italy',
        ru: 'Италия',
        zh: '意大利',
    }],
    ['ivorycoast', {
        en: 'Ivory Coast',
        ru: "Кот-д'Ивуар",
        zh: '科特迪瓦',
    }],
    ['jamaica', {
        en: 'Jamaica',
        ru: 'Ямайка',
        zh: '牙买加',
    }],
    ['japan', {
        en: 'Japan',
        ru: 'Япония',
        zh: '日本',
    }],
    ['jordan', {
        en: 'Jordan',
        ru: 'Иордания',
        zh: '约旦',
    }],
    ['kazakhstan', {
        en: 'Kazakhstan',
        ru: 'Казахстан',
        zh: '哈萨克斯坦',
    }],
    ['kenya', {
        en: 'Kenya',
        ru: 'Кения',
        zh: '肯尼亚',
    }],
    ['kuwait', {
        en: 'Kuwait',
        ru: 'Кувейт',
        zh: '科威特',
    }],
    ['kyrgyzstan', {
        en: 'Kyrgyzstan',
        ru: 'Кыргызстан',
        zh: '吉尔吉斯斯坦',
    }],
    ['laos', {
        en: 'Laos',
        ru: 'Лаос',
        zh: '老挝',
    }],
    ['latvia', {
        en: 'Latvia',
        ru: 'Латвия',
        zh: '拉脱维亚',
    }],
    ['lesotho', {
        en: 'Lesotho',
        ru: 'Лесото',
        zh: '莱索托',
    }],
    ['liberia', {
        en: 'Liberia',
        ru: 'Либерия',
        zh: '利比里亚',
    }],
    ['lithuania', {
        en: 'Lithuania',
        ru: 'Литва',
        zh: '立陶宛',
    }],
    ['luxembourg', {
        en: 'Luxembourg',
        ru: 'Люксембург',
        zh: '卢森堡',
    }],
    ['macau', {
        en: 'Macau',
        ru: 'Макао',
        zh: '中国澳门',
    }],
    ['madagascar', {
        en: 'Madagascar',
        ru: 'Мадагаскар',
        zh: '马达加斯加',
    }],
    ['malawi', {
        en: 'Malawi',
        ru: 'Малави',
        zh: '马拉维',
    }],
    ['malaysia', {
        en: 'Malaysia',
        ru: 'Малайзия',
        zh: '马来西亚',
    }],
    ['maldives', {
        en: 'Maldives',
        ru: 'Мальдивы',
        zh: '马尔代夫',
    }],
    ['mauritania', {
        en: 'Mauritania',
        ru: 'Мавритания',
        zh: '毛里塔尼亚',
    }],
    ['mauritius', {
        en: 'Mauritius',
        ru: 'Маврикий',
        zh: '毛里求斯',
    }],
    ['mexico', {
        en: 'Mexico',
        ru: 'Мексика',
        zh: '墨西哥',
    }],
    ['moldova', {
        en: 'Moldova',
        ru: 'Молдавия',
        zh: '摩尔达维亚',
    }],
    ['mongolia', {
        en: 'Mongolia',
        ru: 'Монголия',
        zh: '蒙古',
    }],
    ['montenegro', {
        en: 'Montenegro',
        ru: 'Черногория',
        zh: '黑山',
    }],
    ['morocco', {
        en: 'Morocco',
        ru: 'Марокко',
        zh: '摩洛哥',
    }],
    ['mozambique', {
        en: 'Mozambique',
        ru: 'Мозамбик',
        zh: '莫桑比克',
    }],
    ['namibia', {
        en: 'Namibia',
        ru: 'Намибия',
        zh: '纳米比亚',
    }],
    ['nepal', {
        en: 'Nepal',
        ru: 'Непал',
        zh: '尼泊尔',
    }],
    ['netherlands', {
        en: 'Netherlands',
        ru: 'Нидерланды',
        zh: '荷兰',
    }],
    ['newcaledonia', {
        en: 'New Caledonia',
        ru: 'Новая Каледония',
        zh: '新喀里多尼亚',
    }],
    ['newzealand', {
        en: 'New Zealand',
        ru: 'Новая Зеландия',
        zh: '新西兰',
    }],
    ['nicaragua', {
        en: 'Nicaragua',
        ru: 'Никарагуа',
        zh: '尼加拉瓜',
    }],
    ['nigeria', {
        en: 'Nigeria',
        ru: 'Нигерия',
        zh: '尼日利亚',
    }],
    ['northmacedonia', {
        en: 'North Macedonia',
        ru: 'Северная Македония',
        zh: '北马其顿',
    }],
    ['norway', {
        en: 'Norway',
        ru: 'Норвегия',
        zh: '挪威',
    }],
    ['oman', {
        en: 'Oman',
        ru: 'Оман',
        zh: '阿曼',
    }],
    ['pakistan', {
        en: 'Pakistan',
        ru: 'Пакистан',
        zh: '巴基斯坦',
    }],
    ['panama', {
        en: 'Panama',
        ru: 'Панама',
        zh: '巴拿马',
    }],
    ['papuanewguinea', {
        en: 'Papua New Guinea',
        ru: 'Папуа-Новая Гвинея',
        zh: '巴布亚新几内亚',
    }],
    ['paraguay', {
        en: 'Paraguay',
        ru: 'Парагвай',
        zh: '巴拉圭',
    }],
    ['peru', {
        en: 'Peru',
        ru: 'Перу',
        zh: '秘鲁',
    }],
    ['philippines', {
        en: 'Philippines',
        ru: 'Филиппины',
        zh: '菲律宾',
    }],
    ['poland', {
        en: 'Poland',
        ru: 'Польша',
        zh: '波兰',
    }],
    ['portugal', {
        en: 'Portugal',
        ru: 'Португалия',
        zh: '葡萄牙',
    }],
    ['puertorico', {
        en: 'Puertorico',
        ru: 'Пуэрто-Рико',
        zh: '波多黎各',
    }],
    ['reunion', {
        en: 'Reunion',
        ru: 'Реюньон',
        zh: '留尼汪岛',
    }],
    ['romania', {
        en: 'Romania',
        ru: 'Румыния',
        zh: '罗马尼亚',
    }],
    ['russia', {
        en: 'Russia',
        ru: 'Россия',
        zh: '俄罗斯',
    }],
    ['rwanda', {
        en: 'Rwanda',
        ru: 'Руанда',
        zh: '卢旺达',
    }],
    ['saintkittsandnevis', {
        en: 'Saint Kitts and Nevis',
        ru: 'Сент-Китс и Невис',
        zh: '圣基茨和尼维斯',
    }],
    ['saintlucia', {
        en: 'Saint Lucia',
        ru: 'Сент-Люсия',
        zh: '圣卢西亚',
    }],
    ['saintvincentandgrenadines', {
        en: 'Saint Vincent and the Grenadines',
        ru: 'Сент-Винсент и Гренадины',
        zh: '圣文森特和格林纳丁斯',
    }],
    ['salvador', {
        en: 'Salvador',
        ru: 'Сальвадор',
        zh: '萨尔瓦多',
    }],
    ['samoa', {
        en: 'Samoa',
        ru: 'Самоа',
        zh: '萨摩亚',
    }],
    ['saudiarabia', {
        en: 'Saudi Arabia',
        ru: 'Саудовская Аравия',
        zh: '沙特阿拉伯',
    }],
    ['senegal', {
        en: 'Senegal',
        ru: 'Сенегал',
        zh: '塞内加尔',
    }],
    ['serbia', {
        en: 'Serbia',
        ru: 'Сербия',
        zh: '塞尔维亚',
    }],
    ['seychelles', {
        en: 'Republic of Seychelles',
        ru: 'Сейшелы',
        zh: '塞舌尔',
    }],
    ['sierraleone', {
        en: 'Sierra Leone',
        ru: 'Сьерра-Леоне',
        zh: '塞拉利昂',
    }],
    ['singapore', {
        en: 'Singapore',
        ru: 'Сингапур',
        zh: '新加坡',
    }],
    ['slovakia', {
        en: 'Slovakia',
        ru: 'Словакия',
        zh: '斯洛伐克',
    }],
    ['slovenia', {
        en: 'Slovenia',
        ru: 'Словения',
        zh: '斯洛文尼亚',
    }],
    ['solomonislands', {
        en: 'Solomon Islands',
        ru: 'Соломоновы острова',
        zh: '所罗门群岛',
    }],
    ['southafrica', {
        en: 'South Africa',
        ru: 'Южная Африка',
        zh: '南非',
    }],
    ['southkorea', {
        en: 'South Korea',
        ru: 'Южная Корея',
        zh: 'undefined',
    }],
    ['spain', {
        en: 'Spain',
        ru: 'Испания',
        zh: '西班牙',
    }],
    ['srilanka', {
        en: 'Sri Lanka',
        ru: 'Шри-Ланка',
        zh: '斯里兰卡',
    }],
    ['suriname', {
        en: 'Suriname',
        ru: 'Суринам',
        zh: '苏里南',
    }],
    ['swaziland', {
        en: 'Swaziland',
        ru: 'Эсватини',
        zh: '斯威士兰',
    }],
    ['sweden', {
        en: 'Sweden',
        ru: 'Швеция',
        zh: '瑞典',
    }],
    ['taiwan', {
        en: 'Taiwan',
        ru: 'Тайвань',
        zh: '中国台湾',
    }],
    ['tajikistan', {
        en: 'Tajikistan',
        ru: 'Таджикистан',
        zh: '塔吉克斯坦',
    }],
    ['tanzania', {
        en: 'Tanzania',
        ru: 'Танзания',
        zh: '坦桑尼亚',
    }],
    ['thailand', {
        en: 'Thailand',
        ru: 'Таиланд',
        zh: '泰国',
    }],
    ['tit', {
        en: 'Trinidad and Tobago',
        ru: 'Тринидад и Тобаго',
        zh: '特立尼达和多巴哥',
    }],
    ['togo', {
        en: 'Togo',
        ru: 'Того',
        zh: '多哥',
    }],
    ['tunisia', {
        en: 'Tunisia',
        ru: 'Тунис',
        zh: '突尼斯',
    }],
    ['turkmenistan', {
        en: 'Turkmenistan',
        ru: 'Туркменистан',
        zh: '土库曼斯坦',
    }],
    ['uganda', {
        en: 'Uganda',
        ru: 'Уганда',
        zh: '乌干达',
    }],
    ['ukraine', {
        en: 'Ukraine',
        ru: 'Украина',
        zh: '乌克兰',
    }],
    ['uruguay', {
        en: 'Uruguay',
        ru: 'Уругвай',
        zh: '乌拉圭',
    }],
    ['usa', {
        en: 'USA',
        ru: 'США',
        zh: '美国',
    }],
    ['uzbekistan', {
        en: 'Uzbekistan',
        ru: 'Узбекистан',
        zh: '乌兹别克斯坦',
    }],
    ['venezuela', {
        en: 'Venezuela',
        ru: 'Венесуэла',
        zh: '委内瑞拉',
    }],
    ['vietnam', {
        en: 'Vietnam',
        ru: 'Вьетнам',
        zh: '越南',
    }],
    ['zambia', {
        en: 'Zambia',
        ru: 'Замбия',
        zh: '赞比亚',
    }],
])

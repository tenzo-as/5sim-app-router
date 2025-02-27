import { Locale } from '@/shared/constants/LOCALES'
import { capitalizeFirstLetter } from '@/shared/utils/capitalizeFirstLetter'

export const serviceNameBy = (id: string, locale: Locale): string => {
    if (localizedNameById.has(id)) return (localizedNameById.get(id) as LocalizedValue)[locale]

    if (nameById.has(id)) return nameById.get(id) as string

    return capitalizeFirstLetter(id)
}

type LocalizedValue = Record<Locale, string>

const localizedNameById: Map<string, LocalizedValue> = new Map([
    ['blockchain', {
        en: 'Dropped-Call Verification',
        ru: 'Прием звонка - сброс',
        zh: 'Dropped-Call Verification/来电中断验证',
    }],
])

const nameById: Map<string, string> = new Map([
    ['siliconflow', 'Silicon Flow/Guiji Liudong'],
    ['kazanexpress', 'Kazanexpress/Магнит Маркет'],
    ['redbook', 'Redbook/Xiaohongshu'],
    ['claudeai', 'ClaudeAI/Anthropic'],
    ['letual', 'Л’Этуаль'],
    ['rivegauche', 'Рив Гош'],
    ['instagram', 'Instagram/Threads'],
    ['alipay', 'Alibaba/Alipay/Taobao/1688'],
    ['mamba', 'Mamba/Wamba'],
    ['163som', '163com'],
    ['makemoney', 'Makemoney (букмекерские)'],
    ['sbermarket', 'Sbermarket/KUPER'],
    ['leroymerlin', 'Leroymerlin/Lemanapro'],
    ['pyaterochka', 'Pyaterochka/x5id'],
    ['openai', 'OpenAI/ChatGPT'],
    ['tiktok', 'Tiktok/Douyin'],
    ['gazpromneft', 'Gazpromneft/GpnBonus'],
    ['mcdonalds', 'McDonalds/Vkusnoitochka'],
    ['google', 'Google/YouTube'],
])

export const ruServiceAliases = new Map<string, string>([
    ['gorodtroika', 'городтройка'],
    ['otzovikcom', 'отзовик'],
    ['sbermegamarket', 'сбермегамаркет'],
    ['kazanexpress', 'казанэкспресс магнит маркет'],
    ['sbermarket', 'сбермаркет купер'],
    ['magnit', 'магнит'],
    ['pyaterochka', 'пятерочка'],
    ['letual', 'летуаль лэтуаль letual'],
    ['rivegauche', 'риф гош рифгош рив гош ривгош'],
    ['ozon', 'озон'],
    ['vkontakte', 'вконтакте'],
    ['yango', 'яндекс.го яндекс такси'],
    ['lukoil', 'лукойл'],
    ['gazpromneft', 'газпромнефть гпн бонус'],
    ['aptekaru', 'аптекару'],
    ['avito', 'авито'],
    ['kukhnya', 'кухня на районе'],
    ['sravni', 'сравни'],
    ['yandex', 'яндекс'],
    ['chitaigorod', 'читайгород'],
    ['teremok', 'теремок'],
    ['miratorg', 'мираторг'],
    ['lenta', 'лента'],
    ['perekrestok', 'перекресток'],
    ['odnoklassniki', 'одноклассники'],
    ['youla', 'юла'],
    ['pochtabank', 'почтабанк'],
    ['vernyi', 'верный'],
    ['golos', 'голос'],
    ['velikieimena', 'великиеимена'],
    ['yandexmoney', 'яндексденьги'],
    ['olimp', 'олимп'],
    ['khl', 'кхл континентальная хоккейная лига'],
    ['vmeste', 'вместе'],
    ['sokolov', 'соколов'],
    ['vezet', 'везёт везет'],
    ['mvideo', 'мвидео'],
    ['eldorado', 'эльдорадо'],
    ['samokat', 'самокат'],
    ['dostavista', 'достависта'],
    ['mtscashback', 'мтс'],
    ['drom', 'дром'],
    ['ulybkaradugi', 'улыбка радуги'],
    ['sportmaster', 'спортмастер'],
    ['detskijmir', 'детскиймир'],
    ['auchan', 'ашан'],
    ['rutube', 'рутуб'],
    ['blablacar', 'блаблакар'],
    ['wildberries', 'вайлдберриз'],
    ['youdo', 'юду'],
    ['vkusvill', 'вкусвилл'],
    ['wink', 'винк'],
    ['delivery', 'деливери'],
    ['dixy', 'дикси'],
    ['tantan', 'тантан'],
    ['leroymerlin', 'леруа мерлен'],
    ['skype', 'скайп'],
    ['sunlight', 'санлайт'],
    ['mega', 'мега'],
    ['mamba', 'мамба вамба'],
    ['okey', 'окей'],
    ['podrygka', 'подружка'],
])
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
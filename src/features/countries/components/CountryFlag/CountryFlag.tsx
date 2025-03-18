import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import Image from '@/shared/components/Image'
import { countryNameBy } from '@/features/countries/utils/countryNameBy'
import { useLocale } from '@/shared/hooks/useLocale'
import './CountryFlag.css'

type Props = {
    className?: string
    countryId: string
    size?: Size
}

export const CountryFlag = ({
    countryId,
    className,
    size = 24,
}: Props) => {
    const t = useTranslations('countries')
    const locale = useLocale()

    return (
        <div 
            className={twMerge(
                'overflow-hidden relative min-h-0 rounded-full',
                twSize[size],
                className,
            )}
        >
            <Image
                src={'/media/sprites/blank.gif'}
                alt={t('flagAlt', { countryName: countryNameBy(countryId, locale) })}
                className={twMerge(
                    `countries countries-${isoBy.get(countryId)}`,
                    'absolute inset-1/2 scale-[0.8] -translate-x-1/2  -translate-y-1/2',
                )}
                width={size}
                height={size}
            />
        </div>
    )
}

type Size = 24

const twSize: Record<Size, string> = {
    24: 'size-6 min-w-6',
}

const isoBy: Map<string, string> = new Map([ ['afghanistan', 'af'], ['albania', 'al'], ['algeria', 'dz'], ['angola', 'ao'], ['antiguaandbarbuda', 'ag'], ['argentina', 'ar'], ['armenia', 'am'], ['aruba', 'aw'], ['australia', 'au'], ['austria', 'at'], ['azerbaijan', 'az'], ['bahamas', 'bs'], ['bahrain', 'bh'], ['bangladesh', 'bd'], ['barbados', 'bb'], ['belarus', 'by'], ['belgium', 'be'], ['belize', 'bz'], ['benin', 'bj'], ['bhutane', 'bt'], ['bih', 'ba'], ['bolivia', 'bo'], ['botswana', 'bw'], ['brazil', 'br'], ['bulgaria', 'bg'], ['burkinafaso', 'bf'], ['burundi', 'bi'], ['cambodia', 'kh'], ['cameroon', 'cm'], ['canada', 'ca'], ['capeverde', 'cv'], ['chad', 'td'], ['chile', 'cl'], ['colombia', 'co'], ['comoros', 'km'], ['congo', 'cg'], ['costarica', 'cr'], ['croatia', 'hr'], ['cyprus', 'cy'], ['czech', 'cz'], ['denmark', 'dk'], ['djibouti', 'dj'], ['dominicana', 'do'], ['easttimor', 'tl'], ['ecuador', 'ec'], ['egypt', 'eg'], ['england', 'gb'], ['equatorialguinea', 'gq'], ['estonia', 'ee'], ['ethiopia', 'et'], ['finland', 'fi'], ['france', 'fr'], ['frenchguiana', 'fr'], ['gabon', 'ga'], ['gambia', 'gm'], ['georgia', 'ge'], ['germany', 'de'], ['ghana', 'gh'], ['gibraltar', 'gi'], ['greece', 'gr'], ['guadeloupe', 'gp'], ['guatemala', 'gt'], ['guinea', 'gn'], ['guineabissau', 'gw'], ['guyana', 'gy'], ['haiti', 'ht'], ['honduras', 'hn'], ['hongkong', 'hk'], ['hungary', 'hu'], ['india', 'in'], ['indonesia', 'id'], ['ireland', 'ie'], ['israel', 'il'], ['italy', 'it'], ['ivorycoast', 'ci'], ['jamaica', 'jm'], ['japan', 'jp'], ['jordan', 'jo'], ['kazakhstan', 'kz'], ['kenya', 'ke'], ['kuwait', 'kw'], ['kyrgyzstan', 'kg'], ['laos', 'la'], ['latvia', 'lv'], ['lesotho', 'ls'], ['liberia', 'lr'], ['lithuania', 'lt'], ['luxembourg', 'lu'], ['macau', 'mo'], ['madagascar', 'mg'], ['malawi', 'mw'], ['malaysia', 'my'], ['maldives', 'mv'], ['mauritania', 'mr'], ['mauritius', 'mu'], ['mexico', 'mx'], ['moldova', 'md'], ['mongolia', 'mn'], ['montenegro', 'me'], ['morocco', 'ma'], ['mozambique', 'mz'], ['namibia', 'na'], ['nepal', 'np'], ['netherlands', 'nl'], ['newcaledonia', 'nc'], ['newzealand', 'nz'], ['nicaragua', 'ni'], ['nigeria', 'ng'], ['northmacedonia', 'mk'], ['norway', 'no'], ['oman', 'om'], ['pakistan', 'pk'], ['panama', 'pa'], ['papuanewguinea', 'pg'], ['paraguay', 'py'], ['peru', 'pe'], ['philippines', 'ph'], ['poland', 'pl'], ['portugal', 'pt'], ['puertorico', 'pr'], ['reunion', 're'], ['romania', 'ro'], ['russia', 'ru'], ['rwanda', 'rw'], ['saintkittsandnevis', 'kn'], ['saintlucia', 'lc'], ['saintvincentandgrenadines', 'vc'], ['salvador', 'sv'], ['samoa', 'ws'], ['saudiarabia', 'sa'], ['senegal', 'sn'], ['serbia', 'rs'], ['seychelles', 'sc'], ['sierraleone', 'sl'], ['singapore', 'sg'], ['slovakia', 'sk'], ['slovenia', 'si'], ['solomonislands', 'sb'], ['southafrica', 'za'], ['southkorea', 'kr'], ['spain', 'es'], ['srilanka', 'lk'], ['suriname', 'sr'], ['swaziland', 'sz'], ['sweden', 'se'], ['taiwan', 'tw'], ['tajikistan', 'tj'], ['tanzania', 'tz'], ['thailand', 'th'], ['tit', 'tt'], ['togo', 'tg'], ['tunisia', 'tn'], ['turkmenistan', 'tm'], ['uganda', 'ug'], ['ukraine', 'ua'], ['uruguay', 'uy'], ['usa', 'us'], ['uzbekistan', 'uz'], ['venezuela', 've'], ['vietnam', 'vn'], ['zambia', 'zm'] ])

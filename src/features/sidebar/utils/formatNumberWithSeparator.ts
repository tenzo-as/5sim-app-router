export const formatNumberWithSeparator = (number: number) => (
    number > 9999 
        ? number.toLocaleString('ru-RU')
        : number
)
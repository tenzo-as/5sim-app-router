import ruMessages from './messages/ru.json'

type Messages = typeof ruMessages

declare global {
    interface IntlMessages extends Messages {}
}

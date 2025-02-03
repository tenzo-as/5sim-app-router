import NextImage, { ImageProps } from 'next/image'

type Props = ImageProps

const Image = (props: Props) => <NextImage {...props} />

export default Image

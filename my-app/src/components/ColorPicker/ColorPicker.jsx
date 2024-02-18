import { Container, Title, Option } from './ColorPicker.styled'

export const ColorPicker = ({options}) => {
    return (
        <Container>
            <Title>Color Picker</Title>
            {options.map(({label, color})=>(
                <Option bgc={color}>
                    <span>{label}</span>
                </Option>
            ))}
        </Container>
    )
}
import React from "react";
// import { colorPickerOptions } from "../../colorOptions";
// import { Alert } from "../Alert/Alert";
// import { ColorPicker } from "../ColorPicker/ColorPicker";
// import { Container, Title} from './App.styled'
// import { Counter } from "../Counter/Counter";
import paintingData from "../../painting.json";
// import { PaintingList } from "../PaintingList/PaintingList";

export class App extends React.Component {

  state = {
    painting: paintingData,
  }

  render() { 
    return (
      <>
        {/* <Container>
          <Title>Title</Title>
        </Container> */}

        {/* <ColorPicker options={colorPickerOptions}/>
        <Alert text="Останнє попередження" type="warning"/>
        <Alert text="Ура! Все ок!" type="success"/>
        <Alert text="О жах - все пропало!" type="error"/> */}
        {/* <Counter initialValue={2} ></Counter> */}
        {/* <PaintingList painting={this.state.painting}></PaintingList> */}
        <form action="">
          <label htmlFor="name">Write your name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="tel">Write your tel</label>
          <input type="text" name="tel" id="tel" />
        </form>
      </>
    )}
}


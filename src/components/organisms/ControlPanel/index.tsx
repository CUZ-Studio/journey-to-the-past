import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react";
import axios from "axios";

import { BackwardButton, ButtonWrapper, Container, ForwardButton, Wrapper } from "./styles";

export default function ControlPanel() {
  const [checked, setChecked] = useState(false);
  const [movement, setMovement] = useState({
    MoveRight: 0,
    MoveUp: 0,
  });

  const getPlayerMovement = () => {
    return axios.put("http://localhost:30010/remote/object/property", {
      objectPath: "/Game/StarterContent/Maps/Test.Test:PersistentLevel.BP_Player_C_4",
      access: "READ_ACCESS",
    });
  };

  useEffect(() => {
    getPlayerMovement().then((res) => {
      const { MoveUp, MoveRight } = res.data;
      setMovement({
        MoveUp,
        MoveRight,
      });
    });
  }, []);

  const handleForward: MouseEventHandler = (e) => {
    e.preventDefault();
    if (!checked) return;

    axios
      .put("http://localhost:30010/remote/object/property", {
        objectPath: "/Game/StarterContent/Maps/Test.Test:PersistentLevel.BP_Player_C_4",
        access: "WRITE_TRANSACTION_ACCESS",
        propertyName: "MoveUp",
        propertyValue: {
          MoveUp: movement.MoveUp + 5,
        },
      })
      .then(() => {
        getPlayerMovement().then((res) => {
          const { MoveUp, MoveRight } = res.data;
          setMovement({
            MoveUp,
            MoveRight,
          });
        });
      });
  };
  const handleBackward: MouseEventHandler = (e) => {
    e.preventDefault();
    if (!checked) return;

    axios
      .put("http://localhost:30010/remote/object/property", {
        objectPath: "/Game/StarterContent/Maps/Test.Test:PersistentLevel.BP_Player_C_4",
        access: "WRITE_TRANSACTION_ACCESS",
        propertyName: "MoveUp",
        propertyValue: {
          MoveUp: movement.MoveUp - 5,
        },
      })
      .then(() => {
        getPlayerMovement().then((res) => {
          const { MoveUp, MoveRight } = res.data;
          setMovement({
            MoveUp,
            MoveRight,
          });
        });
      });
  };
  const handleCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
    axios
      .put("http://localhost:30010/remote/object/property", {
        objectPath: "/Game/StarterContent/Maps/Test.Test:PersistentLevel.BP_Player_C_4",
        access: "WRITE_TRANSACTION_ACCESS",
        propertyName: "State",
        propertyValue: {
          State: e.target.checked,
        },
      })
      .then(() => {
        getPlayerMovement().then((res) => {
          const { State } = res.data;
          setChecked(State);
        });
      });
  };
  return (
    <Container>
      <Wrapper>
        <p>ThirdPerson Character</p>
        <input type="checkbox" onChange={handleCheck} />
        <ButtonWrapper>
          <ForwardButton onClick={handleForward}>앞</ForwardButton>
          <BackwardButton onClick={handleBackward}>뒤</BackwardButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

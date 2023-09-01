import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const UseModal = () => {
  const [open, setOpen] = React.useState(false);

  function close() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  function modal(component: JSX.Element) {
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        {component}
      </Dialog>
    );
  }

  return { modal, close, open: openModal };
};
export default UseModal;

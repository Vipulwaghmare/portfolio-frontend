import { FC } from "react";
import { createPortal } from "react-dom";
import "./index.scss";

interface modelCompInterface {
  onClose: () => void;
}

interface modelInterface {
  showModal: boolean;
  onClose: () => void;
  Component: FC<modelCompInterface>;
}

const ProjectModel = ({ showModal, onClose, Component }: modelInterface) => {
  if (!showModal) return null;
  return createPortal(
    <div className="project-model-container" onClick={onClose}>
      <Component onClose={onClose} />
    </div>,
    document.body,
  );
};

export default ProjectModel;

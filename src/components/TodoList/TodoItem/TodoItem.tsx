import React from "react";
import "./TodoItem.scss";
import { connect } from "react-redux";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMandalorian,
  faRebel,
  faEmpire,
} from "@fortawesome/free-brands-svg-icons";
//action creaters
import {
  deleteTask,
  toggleTask,
} from "../../../action/actions-creaters/todo-list";
import { RootState } from "../../../state-management/store";

interface ITodoItem {
  id: number;
  taskStatus: boolean;
  taskDescription: string;
  isLoading: boolean;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoItem = ({
  id,
  taskStatus,
  taskDescription,
  toggleTask,
  deleteTask,
  isLoading,
}: ITodoItem) => {
  return (
    <li className={`list-item ${taskStatus && "list-item_ckecked"}`}>
      <div className="list-item__checkbox-wrapper">
        <label
          className={`list-item__icons ${
            taskStatus && "list-item__icons_checked "
          } ${isLoading && "list-item__icons_isLoading "}`}
        >
          <input
            className="list-item__input"
            type="checkbox"
            disabled={isLoading}
            checked={taskStatus}
            onChange={(e: React.ChangeEvent) => toggleTask(id)}
          />
          <div className="list-item__empire-wrapper">
            <FontAwesomeIcon icon={faEmpire} className="list-item__empire" />
            <div
              className={`list-item__strikethrough ${
                taskStatus && "list-item__strikethrough_checked"
              }`}
            ></div>
          </div>

          <FontAwesomeIcon icon={faRebel} className="list-item__rebel" />
        </label>
      </div>
      <div
        className={`list-item__text ${taskStatus && "list-item__text_checked"}`}
      >
        {taskDescription}
        <span
          className={`list-item__light-saber ${
            taskStatus && "list-item__light-saber_checked"
          }`}
        ></span>
      </div>

      <FontAwesomeIcon
        icon={faMandalorian}
        className="list-item__mandalorian"
        onClick={(e: React.MouseEvent) => deleteTask(id)}
      />
    </li>
  );
};

export default connect(
  ({ loadingReducer }: RootState) => ({ isLoading: loadingReducer }),
  { toggleTask, deleteTask }
)(TodoItem);

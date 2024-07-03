import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import GreenCheckmark from './GreenCheckmark';
import { useParams } from "react-router";
import * as db from "../../Kanbas/Database";
import React, { useState } from "react";
export default function Modules() {
  const { cid } = useParams();
  // const modules = db.modules;
  const [modules, setModules] = useState<any[]>(db.modules);
  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-light me-2">Collapse All</button>
        <button className="btn btn-light me-2">View Progress</button>
        <button className="btn btn-light me-2">
          <GreenCheckmark /> Publish All
        </button>
        <button className="btn btn-danger">+ Module</button>
      </div>
      <div id="wd-modules">
        <ModulesControls /><br /><br /><br /><br />
        <ul className="list-group rounded-0">
          {modules
           .filter((module) => module.course === cid)
            .map((module) => (
              <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name}
                  <ModuleControlButtons />
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson:any) => (
                      <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <span className="wd-title">{lesson.name}</span>
                        <p>{lesson.description}</p>
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

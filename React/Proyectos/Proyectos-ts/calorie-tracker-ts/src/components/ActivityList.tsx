import { useMemo, Dispatch } from "react";
import { Activity } from "../types";
import { categories } from "../data/category";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activity-reducer";

type ActivityListProps = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
};

export default function ActivityList({
  activities,
  dispatch,
}: ActivityListProps) {
  const categoryList = useMemo(
    () => (category: Activity["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : "")),
    [activities]
  );

  const isEmptyActivities = useMemo(
    () => activities.length === 0,
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {isEmptyActivities ? (
        <p className="text-center mt-5 font-bold text-xl">
          No hay actividades registradas.
        </p>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className={`px-5 py-10 bg-white mt-5 flex justify-between ${
              activity.category === 1
                ? "shadow-sm shadow-lime-600"
                : " shadow-sm shadow-orange-600"
            }`}
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-10 px-10 py-2 text-white uppercase font-bold ${
                  activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
                }`}
              >
                {categoryList(activity.category)}
              </p>
              <p className="text-2xl font-bold pt-3">{activity.name}</p>
              <p
                className={`font-black text-4xl text-lime-500 ${
                  activity.category === 1
                    ? "shadow-sm text-lime-500"
                    : " shadow-sm text-orange-500"
                }`}
              >
                {activity.calories} Calorias
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <button
                onClick={() =>
                  dispatch({
                    type: "set-activeId",
                    payload: { id: activity.id },
                  })
                }
              >
                <PencilSquareIcon className="h-8 w-8 text-green-500" />
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "delete-activity",
                    payload: { id: activity.id },
                  })
                }
              >
                <XCircleIcon className="h-8 w-8 text-red-500" />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}

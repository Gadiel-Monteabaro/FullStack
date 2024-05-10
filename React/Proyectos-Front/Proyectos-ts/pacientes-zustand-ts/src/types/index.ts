export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptoms: string;
};

// Forma resumida para escribir el type del Draft utilizando utilities "omit"
export type DraftPatient = Omit<Patient, "id">;

/* Otra Forma de escribir el type del Draft sin utilities.
  export type DraftPatient = {
    name: string;
    caretaker: string;
    email: string;
    date: Date;
    symptoms: string;
  };
*/

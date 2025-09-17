import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import { CheckCircle } from "lucide-react";

export default function SummaryPage() {
  const { state, dispatch } = useFormContext();

  const navigate = useNavigate();

  function handleSubmit() {
    console.log("Form submitted:", state);

    dispatch({ type: "RESET_FORM" });

    alert("Form Submitted Successfully!");

    navigate("/");
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <p>{state.personalInfo.firstName}</p>
          <p>{state.personalInfo.lastName}</p>
          <p>{state.personalInfo.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Address</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <p>{state.addressInfo.street}</p>
          <p>{state.addressInfo.city}</p>
          <p>{state.addressInfo.zipCode}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Preferences</h2>
        {state.preferences.newsletter || state.preferences.notifications ? (
          <>
            {state.preferences.newsletter && (
              <p className="flex items-center gap-x-2">
                <CheckCircle className="size-5 text-[#FFEB00]" />
                Newsletter Subs.
              </p>
            )}

            {state.preferences.notifications && (
              <p className="flex items-center gap-x-2">
                <CheckCircle className="size-5 text-[#FFEB00]" />
                Notifications Enabled
              </p>
            )}
          </>
        ) : (
          "No Preferences"
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Theme Preference{" "}
          <span className="block capitalize text-base font-normal mt-4">
            {state.preferences.theme}
          </span>
        </h2>
      </div>

      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          type="button"
          onClick={() => navigate("/preferences")}
        >
          Back
        </button>
        <button
          className="p-2 border border-[#FFEB00] rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
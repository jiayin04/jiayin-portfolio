import { supabase } from "@/lib/supabase";
import { useNotification } from "../context/notification_context";
import { ContactFormProps } from "../models/interface";
import { useReducer, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FormAction, FormState } from "../models/type";

const validateEmail = (value: string): string | null => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) ? null : 'Please enter a valid email address';
};

const validateMessage = (value: string): string | null => {
  return value.trim().length > 0 ? null : 'Message cannot be empty';
};


const initialFormState: FormState = {
  email: '',
  message: '',
  emailError: null,
  messageError: null,
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'SET_EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    case 'SET_MESSAGE_ERROR':
      return { ...state, messageError: action.payload };
    case 'RESET_FORM':
      return initialFormState;
    default:
      return state;
  }
};

const ContactForm = ({ onSubmitFormStatus }: ContactFormProps) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailErr = validateEmail(state.email);
    const messageErr = validateMessage(state.message);

    dispatch({ type: 'SET_EMAIL_ERROR', payload: emailErr });
    dispatch({ type: 'SET_MESSAGE_ERROR', payload: messageErr });

    if (emailErr || messageErr) {
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{ email: state.email, message: state.message }]);

      if (error) {
        showNotification('Error sending message. Please try again later!', 'error');
        onSubmitFormStatus(false);
      } else {
        showNotification('Message sent successfully!', 'success');
        dispatch({ type: 'RESET_FORM' });
        onSubmitFormStatus(true);
      }
    } catch (error) {
      showNotification('An unexpected error occurred', 'error');
      onSubmitFormStatus(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-1">
      <div className="bg-[hsl(var(--card))] p-4 md:p-5 rounded-xl shadow-md w-full max-w-md border border-[hsl(var(--border))]">
        <h2 className="text-xl font-semibold text-center text-[hsl(var(--foreground))] mb-4">
          Contact Me
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[hsl(var(--muted-foreground))] text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="text"
              placeholder="Your email"
              value={state.email}
              onChange={(e) => {
                dispatch({ type: 'SET_EMAIL', payload: e.target.value });
                dispatch({ type: 'SET_EMAIL_ERROR', payload: validateEmail(e.target.value) });
              }}
              className={`w-full px-3 py-2 bg-[hsl(var(--input))] text-[hsl(var(--foreground))] border rounded-md text-sm focus:ring-2 focus:outline-none ${state.emailError ? 'border-red-500 focus:ring-red-400' : 'border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))]'
                }`}
            />
            {state.emailError && <p className="text-red-500 text-xs mt-1">{state.emailError}</p>}
          </div>

          <div>
            <label className="block text-[hsl(var(--muted-foreground))] text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write a message..."
              rows={3}
              value={state.message}
              onChange={(e) => {
                dispatch({ type: 'SET_MESSAGE', payload: e.target.value });
                dispatch({ type: 'SET_MESSAGE_ERROR', payload: validateMessage(e.target.value) });
              }}
              className={`w-full px-3 py-2 bg-[hsl(var(--input))] text-[hsl(var(--foreground))] border rounded-md text-sm focus:ring-2 focus:outline-none ${state.messageError ? 'border-red-500 focus:ring-red-400' : 'border-[hsl(var(--border))] focus:ring-[hsl(var(--ring))]'
                }`}
            />
            {state.messageError && <p className="text-red-500 text-xs mt-1">{state.messageError}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-medium text-sm py-2 rounded-md hover:brightness-110 transition duration-300 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                Sending
                <FaSpinner className="animate-spin" />
              </span>
            ) : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

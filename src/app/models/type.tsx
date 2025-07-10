export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export type FormState = {
    email: string;
    message: string;
    emailError: string | null;
    messageError: string | null;
};

export type FormAction =
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_MESSAGE'; payload: string }
    | { type: 'SET_EMAIL_ERROR'; payload: string | null }
    | { type: 'SET_MESSAGE_ERROR'; payload: string | null }
    | { type: 'RESET_FORM' };


export type ProfileInfo = {
    email: string;
    github: string;
    linkedin: string;
}
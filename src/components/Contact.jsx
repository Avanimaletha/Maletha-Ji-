import { CONTACT } from "../constants";

export const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-white-600 text-xl font-medium hover:underline"
        >
          {CONTACT.email}
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Made with 🤍, @ Avani 2025
        </p>
      </div>
    </div>
  );
};

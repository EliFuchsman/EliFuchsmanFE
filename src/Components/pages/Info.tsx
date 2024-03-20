// Info.tsx

interface InfoProps {
  apiData: {
    full_name: string;
    first_name: string;
    last_name: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    GitHub: string;
    LinkedIn: string;
  };
}

const Info: React.FC<InfoProps> = ({ apiData }) => {
  const { first_name, last_name, city, state, email, phone } = apiData;

  return (
    <div>
      <p>{first_name} {last_name}</p>
      <p>{city}, {state}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};


export default Info

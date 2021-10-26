import Loader from 'react-loader-spinner';

export default function ReactLoader() {
  return (
    <Loader
      type="TailSpin"
      color="#A5B4FC"
      height={70}
      width={70}
      className="flex justify-center mt-12"
    />
  );
}
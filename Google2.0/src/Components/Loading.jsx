import { Puff } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Puff color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default Loading;

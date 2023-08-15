import { useStore } from './zustandStore';

export const ZustandCounter = () => {
    const { count, increment } = useStore();

    return (
        <>
            <button aria-label="Increment value" onClick={() => increment()}>
                Increment
            </button>
            <span role="contentinfo">{count}</span>
        </>
    );
};

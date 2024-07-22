import LoadingComponent from "./components/Loading";

export default function Loading() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "100Vw",
            }}
        >
            <LoadingComponent />
        </div>
    );
}

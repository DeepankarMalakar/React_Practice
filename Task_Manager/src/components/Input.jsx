import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Input = () => {
    return (
        <div style={{padding: "16px 8px"}}>
            {/* Input Group */}
            <InputGroup className="mb-3">
                <InputGroup.Text
                    id="inputGroup-sizing-default"
                    style={{
                        border: "1px solid blue",
                        fontWeight: "bold",
                        background: "black",
                        color: "white",
                    }}
                >
                    Task
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    style={{
                        border: "1px solid #0D6EFD",
                        borderLeft: "none",
                        borderRadius: "0 4px 4px 0",
                    }}
                />
            </InputGroup>

            {/* Button Container */}
            <div
                style={{
                    // padding: "8px",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    borderRadius: "4px",
                }}
            >
                <Button
                    variant="outline-dark"
                    style={{
                        border: "2px solid gray",
                        padding: "6px 12px",
                        fontWeight: "bold",
                    }}
                >
                    Add Task
                </Button>
            </div>
        </div>
    );
};

export default Input;

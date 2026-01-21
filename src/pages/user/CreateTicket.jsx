export default function CreateTicket() {
  return (
    <div>
      <h2>Create Ticket</h2>

      <form>
        <div>
          <label>Subject</label>
          <br />
          <input type="text" placeholder="Enter subject" />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Description</label>
          <br />
          <textarea placeholder="Describe your issue"></textarea>
        </div>

        <button style={{ marginTop: "15px" }}>Submit Ticket</button>
      </form>
    </div>
  );
}
// next.js 기본적으로 server component임
export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await resp.json();
  console.log(topic);
  return (
    <>
      <h2>{topic.id}</h2>
      {topic.body}
    </>
  );
}

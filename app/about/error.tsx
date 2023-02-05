"use client";

export default function Error({ error, reset }: { error: Error; reset: any }) {
  return (
    <>
      <div>Error occued {error.message}</div>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}

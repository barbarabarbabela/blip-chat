import React from 'react'
import { useMessagesQuery } from '../hooks/use-messages';

function HistoryPage({ contactId }) {
  const { data, isLoading, isError } = useMessagesQuery("teste638646125846294795@msging.net");

  console.log(data)

  if (isLoading) return <div>Loading messages...</div>;
  if (isError) return <div>Error fetching messages</div>;

  return (
    <div className="max-w-2xl p-4">
      <h2 className="text-2xl font-bold mb-4">Messages:</h2>
      <div className="space-y-4">
        {data.messages.map((message) => (
          <div key={message.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Para: <span className="font-semibold">{message.to}</span></p>
            <p className="text-sm text-gray-600">De: <span className="font-semibold">{message.from}</span></p>
            <p className="text-sm text-gray-800">Conteúdo: {message.content}</p>
            <p className="text-xs text-gray-500">Id: {message.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage
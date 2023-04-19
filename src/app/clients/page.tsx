import React from 'react';
import ExecutableIcon from '@/app/Components/Executable/Icon/ExecutableIcon';
import { clients } from '@/db';
const page = () => {
  return (
    <div className="flex">
      {clients.map((client) => (
        <ExecutableIcon
          name={client?.id || ''}
          key={client?.id}
          route={`${client?.id}`}
        />
      ))}
    </div>
  );
};

export default page;

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, FormInput, FormSelect } from 'components/atoms';
import { IChannel, IChannelsOnContact } from 'lib/types';
import { useState } from 'react';

export interface IChannelWithKey extends IChannelsOnContact {
  key?: string;
}

interface IChannelSelect {
  initialChannel: IChannelWithKey;
  channelsList: IChannel[];
  buttonAdd: boolean;
  handleOnChange: (channel: IChannelWithKey) => void;
  handleOnDelete: (key: string) => void;
  handleOnAdd: () => void;
}

export const ChannelSelect = ({
  initialChannel,
  channelsList,
  buttonAdd,
  handleOnChange,
  handleOnDelete,
  handleOnAdd,
}: IChannelSelect) => {
  const [data, setData] = useState<IChannelsOnContact>(initialChannel);
  const [actualField, setActualField] = useState('');

  const { channelId, account, preference } = data;

  const handleOnChangeChannel = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    handleOnChange?.({ ...data, [e.target.name]: e.target.value });
    setActualField(`${e.target.name}-${initialChannel.key}`);
  };

  return (
    <>
      <tr>
        <td>
          <FormSelect
            id={`channelId-${initialChannel.key}`}
            name="channelId"
            value={channelId}
            onChange={handleOnChangeChannel}
            autoFocus={`channelId-${initialChannel.key}` === actualField}
            required
          >
            <option value="">---</option>
            {channelsList?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </FormSelect>
        </td>
        <td>
          <FormInput
            type="text"
            id={`account-${initialChannel.key}`}
            name="account"
            value={account}
            onChange={handleOnChangeChannel}
            autoFocus={`account-${initialChannel.key}` === actualField}
            required
          />
        </td>
        <td>
          <FormSelect
            id={`preference-${initialChannel.key}`}
            name="preference"
            value={preference}
            onChange={handleOnChangeChannel}
            disabled={!account}
            autoFocus={`preference-${initialChannel.key}` === actualField}
          >
            <option value="NO_PREFERENCE">No Preference</option>
            <option value="FAVORITE">Favorite</option>
            <option value="DONT_DISTURB">Don't disturb</option>
          </FormSelect>
        </td>
        <td>
          <Button
            type="button"
            icon={faMinus}
            size="small"
            height={31}
            color="danger"
            onClick={() => handleOnDelete(initialChannel.key)}
          />
          {buttonAdd && (
            <Button
              type="button"
              icon={faPlus}
              size="small"
              height={31}
              color="info"
              onClick={handleOnAdd}
            />
          )}
        </td>
      </tr>
    </>
  );
};

export const getContactsReq = async (user) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/${user}/contacts`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.contacts;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};

export const addContactReq = async (user, requestBody) => {
  try {
    return await fetch(
      `https://playground.4geeks.com/contact/agendas/${user}/contacts`,
      {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};

export const deleteContactReq = async (user, contact) => {
  try {
    return await fetch(
      `https://playground.4geeks.com/contact/agendas/${user}/contacts/${contact.id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};

export const updateContactReq = async (user, contactId, requestBody) => {
  try {
    return await fetch(
      `https://playground.4geeks.com/contact/agendas/${user}/contacts/${contactId}`,
      {
        method: "PUT",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};

import React from 'react';

export default function EmailLink(): JSX.Element {
    const user = 'contact';
    const domain = 'thomasarmel';
    const tld = 'fr';

    const email = `${user}@${domain}.${tld}`;
    const mailto = `mailto:${email}`;

    return (
        <a
            href={mailto}
            aria-label={`Envoyer un e-mail à ${user} at ${domain} point ${tld}`}
        >
            {user}
            <span aria-hidden>@</span>
            <span aria-hidden>{domain}</span>
            <span aria-hidden>.{tld}</span>
        </a>
    );
}

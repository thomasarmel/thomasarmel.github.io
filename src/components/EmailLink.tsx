import React, { useEffect, useState } from 'react';

export default function EmailLink(): JSX.Element {
    const [mailto, setMailto] = useState<string | null>(null);

    useEffect(() => {
        const user = 'contact';
        const domain = 'thomasarmel';
        const tld = 'fr';

        const email = `${user}@${domain}.${tld}`;
        setMailto(`mailto:${email}`);
    }, []);

    return (
        <a
            href={mailto ?? '#'}
            aria-label="Envoyer un e-mail à contact at thomasarmel point fr"
        >
            contact<span aria-hidden>@</span>thomasarmel<span aria-hidden>.fr</span>
        </a>
    );
}
